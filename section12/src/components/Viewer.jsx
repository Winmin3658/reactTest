import "./Viewer.css";
import { getEmotionImages } from "../util/getEmotionImages";
import { emotionList } from "../util/constants";

const Viewer = ({emotionId, content}) => {

    // src/util/constants.js 가져오기
    const emotionItem = emotionList.find(
        (item) => String(item.emotionId) === String(emotionId)
    );
    return (
        <div className="Viewer">
            <section className="img_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_img_wrapper" >
                    <img src={getEmotionImages(emotionId)} />
                    <div>{emotionItem.emotionName}</div>
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <div className="content_wrapper">
                    <p>{content}</p>
                </div>
            </section>
        </div>
    );
};

export default Viewer;