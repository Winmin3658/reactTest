import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAccessToken, getMemberWithAccessToken } from "../../api/kakaoApi";
import { useDispatch } from "react-redux";
import { login } from "../../slices/loginSlice";
import useCustomLogin from "../../hooks/useCustomLogin";

const KakaoRedirectPage = () => {
    const [searchParams] = useSearchParams()
    const authCode = searchParams.get("code")
    const dispatch = useDispatch()
    const { moveToPath } = useCustomLogin()

    //인가코드가 카카오톡에서 url로 보내지면 그 인가코드로 다시 엑세스 코드를 가져온다.
    useEffect(() => {
        getAccessToken(authCode).then(accessToken => {
            console.log(accessToken)
            getMemberWithAccessToken(accessToken).then(memberInfo => {
                console.log(" -------------------------- ")
                console.log(memberInfo)
                dispatch(login(memberInfo))

                //소셜 회원이 아니라면
                if (memberInfo && !memberInfo.social) {
                    moveToPath("/")
                } else {
                    moveToPath("/member/modify")
                }
            }).catch(error => {
                console.error("Error getting member info with access token:", error);
                // 에러 발생 시 로그인 페이지로 이동하거나 사용자에게 메시지 표시
                moveToPath("/member/login");
            })
        }).catch(error => {
            console.error("Error getting access token:", error);
            // 에러 발생 시 로그인 페이지로 이동하거나 사용자에게 메시지 표시
            moveToPath("/member/login");
        })
    }, [authCode])
    return (
        <div>
            <div>Kakao Login Redirect</div>
            <div>{authCode}</div>
        </div>
    )
}
export default KakaoRedirectPage;