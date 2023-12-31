import React, { useState, useEffect } from "react";
import styles from "./ErrorModal.module.css";
import {
  getErrors,
  getErrorDetail,
  deleteError,
  postErrorComent,
  deleteErrorComent,
  updateErrorComent,
} from "../../utils/errorApi";
import { Avatar, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { loginuser, err_recoil } from "../../stores/atom";
import { Button } from "antd";

import { BsPencilFill } from "react-icons/bs";
import { MdDelete, MdOutlineCancel } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import {FaCrown} from 'react-icons/fa'
import api from "../../utils/api";

interface ErrorModalProps {
  pjtId: string;
  closeModal: () => void;
  err: any;
}

function ErrorModal({ pjtId, closeModal, err }: ErrorModalProps) {
  const [errDetail, setErrDetail] = useState<any>({});
  const [allErr, setAllErr] = useRecoilState(err_recoil);
  const [content, setContent] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editedComment, setEditedComment] = useState<string>("");
  const [userData] = useRecoilState(loginuser);
  const [answer, setAnswer] = useState(0);

  // 단일 에러 불러오기
  const getInError = async () => {
    try {
      const response = await getErrorDetail(err.id);
      setErrDetail(response.data.result[0]);
    } catch (error) {
      console.error(error);
    }
  };

  // 에러 불러오기
  const getInErrors = async () => {
    try {
      if (pjtId) {
        const response = await getErrors(pjtId);
        setAllErr(response.data.result[0]);
        setAnswer(response.data.result[0].state);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteInError = async () => {
    try {
      const response = await deleteError(err.id);
      getInErrors();
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const postReply = async () => {
    if (!content.trim()) {
      // trim() 메서드를 사용하여 공백만 있는 경우도 체크
      alert("값을 입력하세요.");
      return;
    }
    try {
      const response = await postErrorComent(err.id, content);
      getInErrors();
      setContent(""); // 댓글을 작성하고 나서 내용 초기화
      getInError();
    } catch (error) {
      console.error(error);
    }
  };

  const updateReply = async (id: string, updatedContent: string) => {
    // updatedContent 매개변수 추가
    if (!updatedContent.trim()) {
      // trim() 메서드를 사용하여 공백만 있는 경우도 체크
      alert("값을 입력하세요.");
      return;
    }
    try {
      const response = await updateErrorComent(id, updatedContent); // updatedContent를 함수로 전달
      getInErrors();
      getInError();
      setEditingCommentId(null); // 수정 후 수정 모드 종료
    } catch (error) {
      console.error(error);
    }
  };

  const deleteReply = async (id: string) => {
    try {
      const response = await deleteErrorComent(id);
      getInErrors();
      getInError();
    } catch (error) {
      console.error(error);
    }
  };

  const selectAnswer = async (id: number) => {
    const patchedErrPost = errDetail;
    patchedErrPost.state = id;
    api.patch(`/posts/${errDetail.id}`, patchedErrPost).then((res) => {
      console.log(res);
      setAnswer(id);
      getInErrors();
      // getInError();
    });
  };

  // 엔터 키 입력 시 댓글 작성
  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      postReply();
      getInErrors();
    }
  };

  const ErrorImageClickHandler = (e: any) => {
    window.open(e.target.src, "_blank");
  };

  function formatChatTime(chatTime: any) {
    const date = new Date(chatTime);
    return date.toLocaleString(); // 브라우저 설정에 따라 로케일에 맞게 날짜 및 시간을 표시
  }

  useEffect(() => {
    getInError();
  }, [answer, content]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.deContainer}>
          <div className={styles.deContainerHeader}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "preBd", fontSize: "24px" }}>
                Q. {errDetail && errDetail.title}
              </span>
              <div style={{display: 'flex', justifyContent:'start'}}>
                <span style={{ marginLeft: "28px", fontFamily: "preRg", fontSize: "16px" }}>
                  {errDetail.nickname} | 
                </span>
                <span
                  style={{
                    marginLeft: "5px",
                    fontFamily: "preRg",
                    fontSize: "16px",
                  }}
                >
                  {" "}{errDetail.lastModifiedDate
                    ? formatChatTime(errDetail.lastModifiedDate)
                    : "날짜 없음"}
                </span>
              </div>
            </div>
            <span className={errDetail && errDetail.state !==0 ? styles.statusCompleted : styles.statusIncomplete}>
              {errDetail && errDetail.state !== 0 ? "완료" : "미완료"}
            </span>
          </div>
          <div className={styles.deContentContainer}>
            <span style={{fontFamily:'preRg', fontSize:'18px'}}>{errDetail.content}</span>
          </div>
          <div className={styles.errImageScrollContainer}>
            <div className={styles.errImageContainer}>
              {errDetail.attachedFileInfos &&
                errDetail.attachedFileInfos.map(
                  (info: { url: string }, index: number) => (
                    <div className={styles.errImageItem}>
                      <img
                        style={{
                          cursor: "pointer",
                          marginRight: "16px",
                          maxHeight: "280px",
                          height: "280px",
                          borderRadius: "10px",
                        }}
                        onClick={ErrorImageClickHandler}
                        key={index}
                        src={info.url}
                        alt="Preview"
                      />
                      <div className={styles.hoverOverlay}>
                        <AiOutlineDownload
                          onClick={() => window.open(info.url, "_blank")}
                          className={styles.downButton}
                        />
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
        <div className={styles.replyContainer}>
          <span style={{ fontFamily: "preBd", fontSize: "24px" }}>A. </span>
          <TextField
            id="createReplyInput"
            placeholder="답글을 남겨보세요"
            type="text"
            defaultValue={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyPress={handleEnterKeyPress}
          />
          <div className={styles.replyScrollContainer}>
            {errDetail &&
              errDetail?.replies &&
              errDetail.replies.map((item: any) => {
                return (
                  <div style={item.replyId === errDetail.state ? {border: "3px solid #39a789"} : { border: "1px solid #E5E8EB"}} className={styles.replyItemContainer} key={item.replyId}>
                    <span style={item.replyId === errDetail.state ? {position: "absolute", color: "#39a789", fontFamily: "preBd", fontSize: "13px", top: "-17px", left: "10px"} : {display: "none"}}>
                      <FaCrown size={13} color="#ffdc4f"/>
                      BEST
                    </span>
                    <div className={styles.replyLeft}>
                      <Avatar
                        alt={item.nickname}
                        src={process.env.PUBLIC_URL + item.profileImage}
                        sx={{
                          width: 50,
                          height: 50,
                          backgroundColor: item.profileColor,
                        }}
                      />
                    </div>
                    {editingCommentId === item.replyId ? (
                      <div className={styles.replyRight}>
                        <div className={styles.repliesRightContent}>
                          <TextField
                            type="input"
                            defaultValue={item.content}
                            onChange={(e) => setEditedComment(e.target.value)}
                          />
                        </div>
                        <button
                          onClick={() =>
                            updateReply(item.replyId, editedComment)
                          }
                        >
                          저장
                        </button>
                      </div>
                    ) : (
                      <div className={styles.replyRight}>
                        <div className={styles.repliesRightContent}>
                          {item.content}
                        </div>
                        {userData.nickname === item.nickname ? (
                          <div style={{marginTop:'2px'}}>
                            <BsPencilFill
                              style={{ fontSize: "17px", marginRight: "10px" }}
                              onClick={() => setEditingCommentId(item.replyId)}
                            />
                            <MdDelete
                              style={{ fontSize: "20px" }}
                              onClick={() => deleteReply(item.replyId)}
                            />
                          </div>
                        ) : null}
                        {userData.nickname === errDetail.nickname &&
                        item.nickname !== errDetail.nickname ? (
                          errDetail.state === item.replyId ? (
                            <Button
                              onClick={() => selectAnswer(0)}
                              style={{
                                backgroundColor: "#39a789",
                                fontFamily: "preRg",
                              }}
                              key="submit"
                              type="primary"
                            >
                              취소
                            </Button>
                          ) : (
                            <Button
                              onClick={() => selectAnswer(item.replyId)}
                              style={{
                                backgroundColor: "#39a789",
                                fontFamily: "preRg",
                              }}
                              key="submit"
                              type="primary"
                            >
                              채택
                            </Button>
                          )
                        ) : (
                          <></>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        <MdOutlineCancel
          style={{ cursor: "pointer" }}
          size={24}
          onClick={closeModal}
          className={styles.closebtn}
        />
        {userData.nickname === errDetail.nickname ? (
          <Button
            onClick={deleteInError}
            style={{ backgroundColor: "rgb(255, 91, 91)", fontFamily: "preRg" }}
            key="submit"
            type="primary"
            className={styles.deletebtn}
          >
            게시물 삭제
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ErrorModal;
