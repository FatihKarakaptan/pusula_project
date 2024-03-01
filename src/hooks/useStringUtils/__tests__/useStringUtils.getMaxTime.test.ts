import { renderHook } from "@testing-library/react";
import { useStringUtils } from "../useStringUtils.ts";

import {
  invalidElementExistMessage,
  invalidInputForTimeGenerationMessage,
  wrongFormatMessage,
} from "../constants.ts";

describe("useStringUtils - getMaxTime", () => {
  //pozitif case'ler
  test(`Check "1, 3, 8, 9" gives => "19:38"`, () => {
    const { result } = renderHook(() => useStringUtils("1, 3, 8, 9"));
    expect(result.current.getMaxTime()?.value).toBe("19:38");
  });

  test(`Check the order of the elements doesn't change the result, "1, 9, 8, 3" gives => "19:38"`, () => {
    const { result } = renderHook(() => useStringUtils("1, 9, 8, 3"));
    expect(result.current.getMaxTime()?.value).toBe("19:38");
  });

  test(`Check "1, 2, 8, 9" gives => "19:28"`, () => {
    const { result } = renderHook(() => useStringUtils("1, 2, 8, 9"));
    expect(result.current.getMaxTime()?.value).toBe("19:28");
  });

  test(`Check "0, 0, 0, 0" gives => "00:00"`, () => {
    const { result } = renderHook(() => useStringUtils("0, 0, 0, 0"));
    expect(result.current.getMaxTime()?.value).toBe("00:00");
  });

  test(`Check "2, 4, 0, 0" gives => "20:40"`, () => {
    const { result } = renderHook(() => useStringUtils("2, 4, 0, 0"));
    expect(result.current.getMaxTime()?.value).toBe("20:40");
  });

  test(`Check "4, 2, 5, 1" gives => "21:54"`, () => {
    const { result } = renderHook(() => useStringUtils("4, 2, 5, 1"));
    expect(result.current.getMaxTime()?.value).toBe("21:54");
  });

  test(`Check white spaces dont change the result, "1,3,   8    , 9          " gives => "19:38"`, () => {
    const { result } = renderHook(() =>
      useStringUtils("1,3,   8    , 9          ")
    );
    expect(result.current.getMaxTime()?.value).toBe("19:38");
  });

  //negatif case'ler
  test(`Check "4, 2, 5, 4" gives error message => ${invalidInputForTimeGenerationMessage}`, () => {
    const { result } = renderHook(() => useStringUtils("4, 2, 5, 4"));
    expect(result.current.getMaxTime()?.message).toBe(
      invalidInputForTimeGenerationMessage
    );
  });

  test(`Check "4, 2, a, 4" gives error message => ${invalidElementExistMessage}`, () => {
    const { result } = renderHook(() => useStringUtils("4, 2, a, 4"));
    expect(result.current.getMaxTime()?.message).toBe(
      invalidElementExistMessage
    );
  });

  test(`Check "4, 2, 1, -4" gives error message => ${invalidElementExistMessage}`, () => {
    const { result } = renderHook(() => useStringUtils("4, 2, 1, -4"));
    expect(result.current.getMaxTime()?.message).toBe(
      invalidElementExistMessage
    );
  });

  test(`Check "51, 2, 1, 4" gives error message => ${invalidElementExistMessage}`, () => {
    const { result } = renderHook(() => useStringUtils("51, 2, 1, 4"));
    expect(result.current.getMaxTime()?.message).toBe(
      invalidElementExistMessage
    );
  });

  test(`Check "1, 2, 1, 4, 5" gives error message => ${wrongFormatMessage}`, () => {
    const { result } = renderHook(() => useStringUtils("1, 2, 1, 4, 5"));
    expect(result.current.getMaxTime()?.message).toBe(wrongFormatMessage);
  });

  test(`Check "1, 2, 1" gives error message => ${wrongFormatMessage}`, () => {
    const { result } = renderHook(() => useStringUtils("1, 2, 1"));
    expect(result.current.getMaxTime()?.message).toBe(wrongFormatMessage);
  });

  test(`Check "1, 2, 1," gives error message => ${wrongFormatMessage}`, () => {
    const { result } = renderHook(() => useStringUtils("1, 2, 1,"));
    expect(result.current.getMaxTime()?.message).toBe(wrongFormatMessage);
  });
});
