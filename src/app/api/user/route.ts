import { db } from "@/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const dynamic = "force-dynamic";

// export async function POST(req: Request) {
//   const body = await req.json();
//   const { name, phone } = body;

//   const TELEGRAM_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN!;
//   const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID!;
//   const text = `Клієн замовив консультацію:\nІм'я: ${name}\nТелефон: ${phone}`;

//   try {
//     const telegramRes = await fetch(
//       `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ chat_id: CHAT_ID, text }),
//       }
//     );

//     if (!telegramRes.ok) throw new Error("Telegram API failed");

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch {
//     return new Response(JSON.stringify({ error: "Failed to send message" }), {
//       status: 500,
//     });
//   }
// }

export async function GET(req: Request) {
  const body = await req.json();
  const { email } = body;
  console.log(email, "======");
  try {
    if (!email) {
      return null;
    }

    const usersRef = collection(db, "users");

    const q = query(usersRef, where("email", "==", email));

    const querySnapshot = await getDocs(q);

    let user = null;
    querySnapshot.forEach((doc) => {
      user = doc.data();
    });

    // return user as unknown as User;

    return new Response(user, { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to fetch user" }), {
      status: 500,
    });
  }
}
