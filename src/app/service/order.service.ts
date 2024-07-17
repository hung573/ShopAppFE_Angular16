import { ProductService } from './product.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDTO } from '../dtos/order/order.dto';
import { environment } from '../enviroments/environment';
import { Order } from '../models/order';

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
  getAllOrders(keyword: string, page: number, limit: number): Observable<Order[]> {
    debugger;
    const params = new HttpParams()
      .set('keyword', keyword)
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.http.get<Order[]>(`${this.apiUrl}/get-order-by-keyword`, { params });

  }
}
