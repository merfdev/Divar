import { checkOtp } from "../../services/auth";

function CheckOtpForm({ mobile, code, setCode, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return;
    const { response, error } = await checkOtp(mobile, code);
    console.log({ response, error });
    if (response) {
      console.log(response);
    }
    if (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد پیامک شده</p>
      <span>کد پیامک شده به شماره “{mobile}“ راوارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        value={code}
        placeholder="کد تایید "
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>

      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;