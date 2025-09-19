# 🎯 CLB Information technologies - Hệ thống quản lý câu lạc bộ

Một nền tảng quản lý câu lạc bộ hiện đại và toàn diện dành cho sinh viên, được xây dựng với HTML5, CSS3 (Tailwind CSS), JavaScript và các công nghệ web hiện đại.

## ✨ Tính năng chính

### 👑 Dành cho Quản trị viên (Admin/Chủ nhiệm CLB)
- 🏢 **Quản lý thông tin CLB**: Logo, mô tả, nội quy, thông tin liên hệ
- 👥 **Quản lý thành viên**: Thêm/xóa, duyệt đăng ký, phân quyền (thành viên - ban cán sự)
- 📅 **Quản lý sự kiện**: Tạo sự kiện, quản lý đăng ký, điểm danh QR Code
- 💰 **Quản lý tài chính**: Thu phí, chi phí hoạt động, báo cáo tự động
- 📁 **Quản lý tài nguyên**: Tài liệu, hình ảnh, link nhóm chat
- 📢 **Thông báo/Email**: Gửi thông báo realtime cho toàn bộ thành viên

### 👤 Dành cho Thành viên
- 📝 **Đăng ký CLB**: Form đăng ký online đơn giản
- 👁️ **Xem thông tin**: Thông tin CLB, lịch sự kiện, nội quy
- 🎫 **Đăng ký sự kiện**: Đăng ký tham gia sự kiện dễ dàng
- 📰 **Bảng tin**: Xem hoạt động nổi bật và thông báo mới
- 📊 **Lịch sử tham gia**: Tra cứu điểm danh, thành tích cá nhân
- 💳 **Thanh toán online**: Nộp phí thành viên trực tuyến

## 🛠️ Công nghệ sử dụng

### Frontend
- ⚛️ **HTML5** - Semantic markup
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌟 **JavaScript ES6+** - Modern JavaScript features
- 📱 **Responsive Design** - Mobile-first approach
- 🎭 **FontAwesome Icons** - Professional icon set
- 📊 **Chart.js** - Interactive charts and graphs

### Tính năng kỹ thuật
- 🔐 **Local Authentication** - Demo login system
- 📱 **Progressive Web App** ready
- ♿ **Accessibility** compliant
- 🚀 **Performance** optimized
- 📦 **Modular Architecture** - Easy to extend

## 🚀 Cách chạy dự án

### Phương pháp 1: Mở trực tiếp
1. Download tất cả files về máy
2. Mở file `index.html` bằng trình duyệt web

### Phương pháp 2: Live Server (Khuyên dùng)
1. Cài đặt Live Server extension cho VS Code
2. Right-click vào `index.html` → "Open with Live Server"

### Phương pháp 3: Local Web Server
```bash
# Sử dụng Python
python -m http.server 8000

# Hoặc Node.js
npx serve .

# Sau đó truy cập http://localhost:8000
```

## 📱 Demo & Thông tin đăng nhập

### Tài khoản Admin
- **Email**: `admin@clb.com` hoặc `admin`
- **Mật khẩu**: `password`
- **Chức năng**: Truy cập full admin dashboard

### Tài khoản Thành viên
- **Email**: `member@clb.com` hoặc `member`
- **Mật khẩu**: `password`
- **Chức năng**: Xem profile và đăng ký sự kiện

## 📁 Cấu trúc dự án

```
CLB-Management-System/
│
├── index.html          # Trang chủ
├── login.html          # Trang đăng nhập
├── admin.html          # Dashboard admin
├── member.html         # Trang thành viên
├── events.html         # Trang sự kiện
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript logic
└── README.md           # Documentation
```

## 🎨 Tính năng giao diện

### Responsive Design
- 📱 **Mobile First**: Tối ưu cho thiết bị di động
- 💻 **Desktop Ready**: Giao diện desktop hoàn chỉnh
- 🖥️ **Tablet Friendly**: Hỗ trợ tốt cho tablet

### UI/UX Features
- 🌈 **Modern Design**: Giao diện hiện đại, clean
- ⚡ **Smooth Animations**: Hiệu ứng mượt mà
- 🔔 **Real-time Notifications**: Thông báo thời gian thực
- 🎯 **Intuitive Navigation**: Điều hướng trực quan
- 📊 **Interactive Charts**: Biểu đồ tương tác
- 🎨 **Consistent Theme**: Thiết kế nhất quán

## 🔧 Tính năng JavaScript

### Core Features
- 🔐 **Authentication System**: Hệ thống xác thực demo
- 📱 **Mobile Menu**: Menu responsive cho mobile
- 🔍 **Search & Filter**: Tìm kiếm và lọc dữ liệu
- ✅ **Form Validation**: Validate form đầu vào
- 💾 **Local Storage**: Lưu trữ dữ liệu local
- 🔔 **Notification System**: Hệ thống thông báo

### Utilities
- 🌐 **API Helpers**: Mock API functions
- 📅 **Date Formatting**: Format ngày tháng
- 💰 **Currency Formatting**: Format tiền tệ VND
- ⏱️ **Debounce & Throttle**: Tối ưu performance
- 🎯 **Event Emitter**: Custom event system

## 🎯 Các trang chính

### 1. Trang chủ (`index.html`)
- Hero section với CTA buttons
- Feature highlights
- Statistics section
- Testimonials
- Footer với links

### 2. Dashboard Admin (`admin.html`)
- Sidebar navigation
- Statistics cards
- Interactive charts
- Recent activities
- Responsive design

### 3. Trang thành viên (`member.html`)
- Personal dashboard
- Event registration
- Achievement badges
- Profile information
- Activity history

### 4. Trang sự kiện (`events.html`)
- Event listings
- Filter & search
- Event registration
- Event details
- Pagination

### 5. Trang đăng nhập (`login.html`)
- Secure login form
- Social media login options
- Demo credentials
- Responsive design

## 💡 Hướng dẫn tùy chỉnh

### Thay đổi màu sắc
```css
/* Trong styles.css */
:root {
  --primary-color: #3B82F6;
  --secondary-color: #10B981;
  --accent-color: #F59E0B;
}
```

### Thêm tính năng mới
```javascript
// Trong script.js
function newFeature() {
  // Thêm logic mới ở đây
}

// Đăng ký event listener
document.addEventListener('DOMContentLoaded', function() {
  // Khởi tạo tính năng mới
  initializeNewFeature();
});
```

## 🔄 Roadmap

### Version 2.0 (Kế hoạch)
- 🔌 **Backend Integration**: Kết nối với API thật
- 📧 **Email System**: Gửi email thật
- 💳 **Payment Gateway**: Tích hợp cổng thanh toán
- 📱 **PWA**: Progressive Web App
- 🌙 **Dark Mode**: Chế độ tối
- 🌍 **Multi-language**: Đa ngôn ngữ

### Version 3.0 (Tương lai)
- 📱 **Mobile App**: React Native/Flutter
- 🤖 **AI Chatbot**: Trợ lý ảo
- 📊 **Advanced Analytics**: Phân tích nâng cao
- 🔗 **Third-party Integrations**: Tích hợp bên thứ 3

## 🐛 Báo lỗi & Đóng góp

Nếu bạn tìm thấy lỗi hoặc muốn đóng góp:
1. Tạo issue mô tả chi tiết
2. Fork repository
3. Tạo branch mới cho feature/fix
4. Submit pull request

## 📄 License

MIT License - Tự do sử dụng cho mục đích học tập và thương mại.

## 👨‍💻 Tác giả

**MiniMax Agent**
- 🌟 AI-powered development
- 📧 Contact: [Contact Information]
- 🔗 Portfolio: [Portfolio Link]

---

### 🎉 Cảm ơn bạn đã sử dụng CLB Management System!

**Happy coding! 🚀**