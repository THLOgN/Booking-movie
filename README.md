# 🎬 Movie4You

**Movie4You** là nền tảng SaaS đặt vé xem phim trực tuyến hiện đại, được phát triển với **React + TailwindCSS** cho frontend, **Node.js + Express** cho backend, và **MongoDB** cho cơ sở dữ liệu.  
Hệ thống tích hợp **Clerk** để xác thực người dùng an toàn và **Stripe** để xử lý thanh toán trực tuyến tự động.  
Toàn bộ dự án được triển khai (deploy) trên **Vercel** thông qua **GitLab CI/CD pipeline**.

---

## 🚀 Tính năng nổi bật

- 🎞️ **Xem phim**: xem trailer, chi tiết, thể loại, đánh giá.  
- 🎟️ **Đặt vé trực tuyến**: chọn suất chiếu, chỗ ngồi, rạp, và thanh toán online.  
- 👤 **Đăng ký / Đăng nhập với Clerk** (Google, Email, v.v.).  
- 💳 **Thanh toán tự động bằng Stripe** (hỗ trợ thẻ Visa/MasterCard).  
- 🔍 **Tìm kiếm, lọc phim, hiển thị lịch chiếu theo ngày.**  
- 📱 **Giao diện responsive** — hiển thị đẹp trên mọi thiết bị.  
- 📊 **Bảng quản trị (Admin Dashboard)** quản lý phim, rạp, vé, doanh thu.  

---

## 🧩 Kiến trúc & Công nghệ

| Thành phần | Công nghệ | Mô tả |
|-------------|------------|--------|
| **Frontend** | React + TailwindCSS | Giao diện người dùng, responsive & hiện đại |
| **Backend (API)** | Node.js + Express | Xử lý logic, kết nối CSDL, tích hợp API Stripe |
| **Database** | MongoDB + Mongoose | Lưu trữ thông tin phim, vé, người dùng |
| **Authentication** | Clerk | Đăng ký/đăng nhập an toàn, xác thực JWT tự động |
| **Payment** | Stripe API | Thanh toán trực tuyến, quản lý hóa đơn & session |
| **Deployment** | Vercel + GitLab CI/CD | Triển khai tự động khi push code |
| **Version Control** | GitLab | Quản lý source, issue và pipeline CI/CD |

---

## 🗂️ Cấu trúc thư mục

movie4you/
┣━ frontend/ # React + Tailwind + Clerk SDK + Stripe checkout
┃ ┣━ src/
┃ ┣━ components/
┃ ┣━ pages/
┃ ┗━ package.json
┣━ backend/ # Node.js + Express + Stripe + MongoDB
┃ ┣━ src/
┃ ┣━ routes/
┃ ┣━ models/
┃ ┣━ controllers/
┃ ┣━ server.js
┃ ┗━ package.json
┣━ .gitlab-ci.yml # Cấu hình CI/CD pipeline
┗━ README.md

yaml
Sao chép mã

---

## ⚙️ Cài đặt & Chạy dự án

### 1️⃣ Clone repository
```bash
git clone https://gitlab.com/yourusername/movie4you.git
cd movie4you
2️⃣ Cài đặt dependencies
bash
Sao chép mã
cd backend && npm install
cd ../frontend && npm install
3️⃣ Cấu hình biến môi trường
Tạo file .env trong thư mục backend:

bash
Sao chép mã
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
Tạo file .env.local trong thư mục frontend:

bash
Sao chép mã
VITE_API_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
🧾 Tích hợp Clerk (Authentication)
📌 Cách hoạt động
Người dùng đăng nhập bằng Clerk UI Components (Google, email, OTP, v.v.)

Clerk tự động quản lý session, token và user data.

Backend nhận token JWT từ frontend → xác minh với Clerk SDK.

📚 Tài liệu chính thức
Clerk.dev Documentation

💳 Tích hợp Stripe (Payment)
📌 Cách hoạt động
Người dùng chọn phim, chỗ ngồi, và nhấn “Thanh toán”.

Frontend gửi request đến backend → backend gọi Stripe Checkout Session API.

Stripe redirect người dùng đến trang thanh toán bảo mật.

Sau khi thanh toán xong, Stripe webhook gửi xác nhận → backend cập nhật vé vào database.

📚 Tài liệu chính thức
Stripe Docs - Checkout Sessions

🔄 CI/CD (GitLab → Vercel)
File .gitlab-ci.yml mẫu:

yaml
Sao chép mã
stages:
  - install
  - build
  - deploy

install_dependencies:
  stage: install
  script:
    - npm install --prefix backend
    - npm install --prefix frontend

build_frontend:
  stage: build
  script:
    - npm run build --prefix frontend

deploy_frontend:
  stage: deploy
  script:
    - echo "🚀 Deploying Movie4You to Vercel..."
🧠 Hướng phát triển tiếp theo
🤖 Gợi ý phim bằng AI (recommendation system dựa theo lịch sử đặt vé).

📅 Tự động đồng bộ lịch chiếu từ các rạp đối tác.

💬 Chatbot hỗ trợ khách hàng tích hợp API OpenAI.

🌍 Triển khai API công khai (Public API) cho đối tác bên ngoài.

👨‍💻 Tác giả
Nguyễn Thăng Long
Full Stack Developer
📧 Email: thanglong479@gmail.com

💡 “Movie4You — Đưa rạp phim đến ngay trong tay bạn.”
