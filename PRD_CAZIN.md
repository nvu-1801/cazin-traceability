# Landing Page: Truy Xuất Nguồn Gốc CAZIN

## 1. Flow trải nghiệm (Lấy cảm hứng từ Lộc Trời)
Trang web ưu tiên giao diện Mobile (Mobile-first). Mọi element căn giữa hoặc left-align với padding `16px`.

- **Bảo mật:** Vừa quét QR vào -> Hiển thị Modal "Sản phẩm chính hãng" -> Click đóng -> Vào trang chính.
- **Tiêu đề khối:** Dùng H2, in đậm, chữ màu `#612C47` (Tím tía tô) kèm 1 gạch chân ngắn màu xanh lá cây hoặc tím làm điểm nhấn.

## 2. Ánh xạ nội dung (Mapping từ Doc -> UI)

### Khối 1: Header & Banner
- **Header:** Cao `60px`, nền trắng kem, dính (sticky) ở trên cùng. Căn giữa Logo Cazin. Border-bottom siêu nhạt.
- **Banner (ProductGallery):** Carousel trượt ngang hiển thị 4 ảnh sản phẩm đã lọc. (Nên dùng CSS scroll-snap thay vì thư viện js nặng).

### Khối 2: Thông tin cơ bản (ProductInfo)
- **Tên SP:** `H1` - TRÀ TÍA TÔ TÚI LỌC CAZIN (Chữ to, đậm).
- **Phân cách:** Đoạn "Trà tía tô... khát vọng nâng tầm nông sản Việt" - Cho font chữ nghiêng (italic) nhẹ, text màu xám `#4A4A4A`.
- **Thông số:** Dùng dạng List (<ul>) hoặc Grid 2 cột:
  - Khối lượng tịnh: 80g
  - Quy cách: 40 túi lọc × 2g/hộp
  - Hạn sử dụng: 12 tháng

### Khối 3: Hướng dẫn sử dụng & Công dụng (Dạng Accordion hoặc Card)
- **Cách dùng:** Chia 2 cột:
  - [Icon cốc bốc khói] Uống nóng: 1 túi + 120ml nước nóng (5 phút).
  - [Icon bông tuyết] Uống lạnh: 1 túi + 90ml nước nóng (5 phút) + Đá.
- **Công dụng:** Dùng icon dấu tick (✓) màu xanh lá (`#3E5C40`) trước các dòng: Tăng đề kháng, Giảm ho, Dưỡng nhan...

### Khối 4: Dòng thời gian Sản xuất (ProcessFlow)
- Thiết kế dạng Timeline dọc dọc theo viền trái (border-left):
  1. Nguyên liệu (Gia Lai) -> 2. Băm/Rửa -> 3. Sấy khô -> 4. Phối trộn -> 5. Đóng gói.

### Khối 5: Bảo chứng chất lượng (Certificates)
- Tiêu đề: CHỨNG NHẬN CHẤT LƯỢNG
- Bố cục: Hiển thị 5 ảnh theo dạng scroll ngang (overflow-x-auto) hoặc grid. Căn lề đồng đều. Có shadow rất nhẹ `box-shadow: 0 4px 6px rgba(0,0,0,0.05)` để ảnh nổi bật.

### Khối 6: Footer
- Nền màu Tím tối `#2D1421` hoặc Xanh rêu đậm, chữ trắng.
- Cột thông tin:
  - HỘ KINH DOANH NGUYỄN CẢNH DUY
  - Địa chỉ: Thôn Tăng Lợi - Xã Canh Vinh - Tỉnh Gia Lai
  - SĐT: 0914417583
  - Email & Website.

## 3. Class Animation mẫu (Tailwind CSS hoặc CSS thuần)
Cần có file script nhỏ sử dụng `IntersectionObserver` để add class `visible` khi scroll tới.

```css
/* Trạng thái ban đầu */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Trạng thái khi scroll tới */
.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}