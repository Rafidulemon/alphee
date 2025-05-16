import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const order = await request.json();

    const {
      productId,
      productName,
      price,
      quantity,
      size,
      customerName,
      phone,
      email,
      address,
      location,
      district,
      policeStation,
      deliveryCharge,
      totalPrice,
    } = order;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const deliveryArea = location === "inside"
      ? `Police Station: ${policeStation}`
      : `District: ${district}, Police Station: ${policeStation}`;

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL,
      subject: `🛒 New Order from ${customerName}`,
      text: `
📦 Product: ${productName}
🆔 Product ID: ${productId}
📏 Size: ${size}
🔢 Quantity: ${quantity}
💸 Price per item: ৳${price}
🚚 Delivery Charge: ৳${deliveryCharge}
💰 Total: ৳${totalPrice}

👤 Name: ${customerName}
📞 Phone: ${phone}
📧 Email: ${email || "N/A"}
🏠 Address: ${address}
📍 Location: ${location === "inside" ? "Inside Chittagong" : "Outside Chittagong"}
${deliveryArea}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Order email sent" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ message: "Failed to send order email" }, { status: 500 });
  }
}
