import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface OrderItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  size?: string;
}

export async function POST(request: Request) {
  try {
    const { orderDetails, customerInfo } = await request.json();

    const {
      customerName,
      phone,
      email,
      address,
      location,
      district,
      policeStation,
      deliveryCharge,
      totalPrice,
    } = customerInfo;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const orderText = orderDetails
      .map(
        (item: OrderItem) => `
📦 Product: ${item.productName}
🆔 Product ID: ${item.productId}
📏 Size: ${item.size}
🔢 Quantity: ${item.quantity}
💸 Price per item: ৳${item.price}
`
      )
      .join("\n");

    const deliveryArea =
      location === "inside"
        ? `Police Station: ${policeStation}`
        : `District: ${district}, Police Station: ${policeStation}`;

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL,
      subject: `🛒 New Order from ${customerName}`,
      text: `
${orderText}
🚚 Delivery Charge: ৳${deliveryCharge}
💰 Total: ৳${totalPrice}

👤 Name: ${customerName}
📞 Phone: ${phone}
📧 Email: ${email || "N/A"}
🏠 Address: ${address}
📍 Location: ${
        location === "inside" ? "Inside Chittagong" : "Outside Chittagong"
      }
${deliveryArea}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Order email sent" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { message: "Failed to send order email" },
      { status: 500 }
    );
  }
}
