## HOC Practicing

WithSpinner Component Nhận vào 1 component, kiểm tra component có available hay chưa, nếu có trả về component, nếu không có trả về loading Spinner

WithHeader nhận vào 1 Page và 1 Header (có header mặc định). Trả về Page chứa Header.
Sử dụng trong trường hợp trang có nhiều header khác nhau hoặc những page không chứa Header.

Không dùng HOC trong hàm render, vì khi re-render, component trả về từ HOC sẽ được coi như là component mới. thuật toán diffing sẽ quyết định unmount/remount component. Ngoài performance, state/props của HOC truyền xuống component cũng có thể bị mất.

## -------------------------------------------------
## Thứ 4, ngày 20/11

### Promise Không chạy async
Sau khi chạy code, hàm log(a,b) không thực thi ngay mà chờ 1 lúc (theo em là do chạy wait()) mới log ra 1,2
```
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
```
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

### use case of HOC
Check props HOC, CheckProps(propsToCheck)(WrappedComponent) <br>
Nếu propsToCheck không tồn tại, render Err, props tồn tại, render WrappedComponent <br>
......

### event.stopPropagation
https://codesandbox.io/s/spring-violet-qmg27 <br>
Event capture từ window đến target và bubble ngược lại, stopPropagation để ngăn quá trình Capturing -> bubbling


## -------------------------------------------------
## Thứ 5, ngày 21/11

### useState and ocClickOutside
https://codesandbox.io/s/elastic-mcnulty-5v95u <br>

### singEx
videoContainer dùng getDerived để gán props vào state thay vì dùng props ? <br>
redux-store : compose(apply(thunk)) ? compose(apply, thunk) <br>
DiscoverRecommend : Các propTypes.func dùng default () => {}, còn propTypes.func.isRequired dùng default null? <br>
Vì sao không được dùng arrow func cho functional component <br>
Discover.js - LivestreamDesc - tại sao dùng dangerouslySetInnerHtml mà không truyền trực tiếp qua children <br>

Best practices trong readme khuyên dùng destructuring, thường component không nhận state từ quá nhiều reducer, sao ko destruct tại arguments <br>
truyền full state có tốn bộ nhớ không ?
```
const mapStateToProps = (state /*, ownProps*/) => {
  let { App } = state

  return {
    avatar: App.profile.avatar,
    firstName: App.profile.firstName,
    lastName: App.profile.lastName,
    email: App.profile.email
  }
}

const mapStateToProps = ({ App } /*, ownProps*/) => ({
  avatar: App.profile.avatar,
  firstName: App.profile.firstName,
  lastName: App.profile.lastName,
  email: App.profile.email
})

const mapStateToProps = ({ App: { profile } } /*, ownProps*/) => ({
  avatar: profile.avatar,
  firstName: profile.firstName,
  lastName: profile.lastName,
  email: profile.email
})
```

## -------------------------------------------------
## Thứ 6, ngày 22/11
```
{url ? (
  <NavLink to={url}>
    {isDefaultUser
      ? <UserName width={width}>{userName}</UserName>
      :  <Avatar
          src={avatar || defaultAvatar}
          alt="Avatar icon"
          width={width}
      />
    }
  </NavLink>
) : (
  isDefaultUser
    ? <UserName width={width}>{userName}</UserName>
    : <Avatar
        src={avatar || defaultAvatar}
        alt="Avatar icon"
        width={width}
    />
)}
```
----
```
let { avatar, width, url, className, isDefaultUser, userName } = this.props
const content = isDefaultUser ? (
    <UserName width={width}>{userName}</UserName>
  ) : (
    <Avatar src={avatar || defaultAvatar} alt="Avatar icon" width={width} />
  )

return (
  <Wrapper className={className}>
    {url ? <NavLink to={url}>{content}</NavLink> : { content }}
  </Wrapper>
)
```
