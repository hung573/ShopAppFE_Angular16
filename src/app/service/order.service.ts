import { ProductService } from './product.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDTO } from '../dtos/order/order.dto';
import { environment } from '../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = `${environment.apiBaseUrl}/orders/add`;

  constructor(private http: HttpClient) { }

  placeOrder(orderData: OrderDTO): Observable<any> {
    // Gửi yêu cầu đặt hàng
    return this.http.post(this.apiUrl, orderData);
  }
}
