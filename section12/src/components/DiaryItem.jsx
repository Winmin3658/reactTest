import './DiaryItem.css';
import {getEmotionImages} from '../util/getEmotionImages';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({id, emotionId, createdDate, content})=>{
        const nav = useNavigate();

        // 일기장 상세보기 가기
        const goDiaryPage = ()=>{
            nav(`/diary/${id}`);
        };

        // 일기장 수정하기 가기
        const goEditPage = ()=>{
            nav(`/edit/${id}`);
        };
    
    return (
        <div className='DiaryItem'>
            <section className='img_section'>
                <img src={getEmotionImages(emotionId)} onClick={goDiaryPage}/>
            </section>
            <section className='info_section' onClick={goDiaryPage}>
                <div className='created_date'>{new Date(createdDate).toLocaleDateString()}</div>
                <div></div>
                {content}
            </section>
            <section className='button_section'>
                <Button text={'수정하기'} onClick={goEditPage}/>
            </section>
        </div>
    );
};

export default DiaryItem;