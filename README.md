## HOC Practicing

WithSpinner Component Nhận vào 1 component, kiểm tra component có available hay chưa, nếu có trả về component, nếu không có trả về loading Spinner

WithHeader nhận vào 1 Page và 1 Header (có header mặc định). Trả về Page chứa Header.
Sử dụng trong trường hợp trang có nhiều header khác nhau hoặc những page không chứa Header.

Không dùng HOC trong hàm render, vì khi re-render, component trả về từ HOC sẽ được coi như là component mới. thuật toán diffing sẽ quyết định unmount/remount component. Ngoài performance, state/props của HOC truyền xuống component cũng có thể bị mất.

## -------------------------------------------------
## Thứ 4, ngày 20/11

### Promise Không chạy async
const wait = () => {
  let s = 0;
  for (let i = 0; i <1000000000; i++) {
    s+=i;
  }
  return s
}

let a = 1;
let b = 2;
new Promise((resolve, reject) => {
  wait();
  wait();
  resolve(10)
}).then(result => a = result)
new Promise((resolve, reject) => {
  wait()
  resolve(20)
}).then (res => b = res);
console.log(a,b);

### So sánh PureCOmponent và Component khi props thay đổi liên tục
https://codesandbox.io/s/funny-bhabha-cdj2h
Result : PureComp : 50 lần - trung binhf 1.55ms
         Comp :50 lần trung bình 1.43ms
=> PureComp không ảnh hưởng đến performance
Sau 800-1000 lần re-render, render time của cả 2 giảm dần xuống còn 0.28-0.3 ms. tại sao nó làm giảm dần từ 1.5 -> 0.28ms được??? tại giải thuật của Profiler?

## -------------------------------------------------
