/* eslint-disable react/display-name */
import { NextPage } from "next";
import { memo, useEffect, useLayoutEffect, useRef } from "react";
import { SingleOTPInputProps } from "../constants/otpInputProps";
import usePrevious from "./usePrevious";

const SingleOTPInput: NextPage<SingleOTPInputProps> = memo((props) => {
  const { focus, autoFocus, ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);
  useEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);
  return (
    <>
      <input ref={inputRef} {...rest} />
    </>
  );
});
export default SingleOTPInput;
