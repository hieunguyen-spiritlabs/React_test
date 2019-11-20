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
<br>
### So sánh PureCOmponent và Component khi props thay đổi liên tục
https://codesandbox.io/s/funny-bhabha-cdj2h <br>
Result : PureComp : 50 lần - trung binhf 1.55ms
         Comp :50 lần trung bình 1.43ms <br>
=> PureComp không ảnh hưởng đến performance <br>
Sau 800-1000 lần re-render, render time của cả 2 giảm dần xuống còn 0.28-0.3 ms. tại sao nó làm giảm dần từ 1.5 -> 0.28ms được??? tại giải thuật của Profiler?<br>

https://twitter.com/dan_abramov/status/759383530120110080/photo/1?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E759383530120110080&ref_url=https%3A%2F%2Fhashnode.com%2Fpost%2Fwhy-dont-use-purecomponent-everywhere-cjscv5ioi037zdys2ohcvht7p <br>
Khuyến cáo từ React Team : Use PureCOmponent everywhere will slowdown your app <br>
PureComponent thực hiện shallow compare, 1 số trường hợp cụ thể cần deep compare thì dùng shouldCOmponentUpdate <br>

## -------------------------------------------------
