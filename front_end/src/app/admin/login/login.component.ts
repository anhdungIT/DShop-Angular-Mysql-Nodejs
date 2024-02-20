import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  checkError: any;
  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(8)]),
    password: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService) {}

  get f() {
    return this.formLogin.controls;
  }


  onLogin(): void {
    // Xử lý đăng nhập
    this.userService.login(this.formLogin.value).subscribe(
      (res: any) => {
        if (res.message === 'Đăng nhập thành công!' && res.user) {
          sessionStorage.setItem('login', JSON.stringify(res.user));

          // Kiểm tra vai trò của người dùng sau khi lưu thông tin đăng nhập
          const user = res.user;
          if (user && user.role === 'admin') {
            location.assign('admin'); // Chuyển hướng đến trang admin dashboard nếu có quyền admin
          } else {
            this.checkError = 'Bạn không có quyền truy cập!';
          }
        } else {
          this.checkError = 'Tài khoản không đúng';
        }
      },
      (error: any) => {
        // Xử lý lỗi khi gọi API đăng nhập
        console.error('Lỗi đăng nhập:', error);
        this.checkError = 'Đã xảy ra lỗi khi đăng nhập.Kiểm tra lại tài khoản và mật khẩu';
      }
    );
  }
}
