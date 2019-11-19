## HOC Practicing

WithSpinner Component Nhận vào 1 component, kiểm tra component có available hay chưa, nếu có trả về component, nếu không có trả về loading Spinner

WithHeader nhận vào 1 Page và 1 Header (có header mặc định). Trả về Page chứa Header.
Sử dụng trong trường hợp trang có nhiều header khác nhau hoặc những page không chứa Header.

Không dùng HOC trong hàm render, vì khi re-render, component trả về từ HOC sẽ được coi như là component mới. thuật toán diffing sẽ quyết định unmount/remount component. Ngoài performance, state/props của HOC truyền xuống component cũng có thể bị mất.
