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
  private apiUrl = `${environment.apiBaseUrl}/orders`;

  constructor(private http: HttpClient) { }

  placeOrder(orderData: OrderDTO): Observable<any> {
    const url = `${this.apiUrl}/add`;
    // Gửi yêu cầu đặt hàng
    return this.http.post(url, orderData);
  }
  getOrderById(orderId: number): Observable<any> {
    const url = `${this.apiUrl}/order/${orderId}`;
    return this.http.get(url);
  }
}
