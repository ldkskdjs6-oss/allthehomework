
export interface Order {
  id: string;
  title: string; // This will be dynamically generated or stored as is
  description: string; // Remarks like "Fragile"
  recipientName: string;
  dormitory: string; // e.g. "南1栋-101"
  status: 'pending' | 'delivering' | 'delivered' | 'cancelled';
  price: number;
  publisher: string;
  accepter?: string;
  publishTime: string;
  completeTime?: string;
  avatarUrl?: string;
  // New fields
  packageCount: number;
  expressType: string; // e.g. '外卖', '易碎品'
  pickupCode?: string; // e.g. 'XX-X-XXX'
  contactPhone?: string;
  pickupLocation?: string;
  deadline?: string;
  isReviewed?: boolean; // New field to track review status
}

export interface User {
  id: string;
  username: string;
  phone: string;
  address: string;
  gender: 'Male' | 'Female';
  avatarUrl: string;
  ordersTaken: number;
  ordersPosted: number;
}

export enum OrderStatus {
  Pending = 'pending',
  Delivering = 'delivering',
  Delivered = 'delivered',
  Cancelled = 'cancelled',
}