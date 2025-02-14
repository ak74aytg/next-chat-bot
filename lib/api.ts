import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
interface AuthResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

interface Message {
  id: number;
  text: string;
  sender: number;
  receiver: number;
  documentId: number;
  timestamp: number;
}

export const registerUser = async (
  username: string,
  email: string,
  password: string
): Promise<AuthResponse | null> => {
  try {
    const response = await axios.post<AuthResponse>(
      `${API_URL}/auth/local/register`,
      {
        username,
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    return null;
  }
};

export const loginUser = async (
  identifier: string,
  password: string
): Promise<AuthResponse | null> => {
  try {
    const response = await axios.post<AuthResponse>(`${API_URL}/auth/local`, {
      identifier,
      password,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
};

export const fetchChatMessages = async (): Promise<
  {
    id: number;
    text: string;
    sender: number;
    receiver: number;
    timestamp: number;
  }[]
> => {
  try {
    const token = Cookies.get("jwt");
    const userId = Number(Cookies.get("userId"));
    if (!token || !userId) {
      console.error("User is not authenticated.");
      return [];
    }

    const response = await axios.get(`${API_URL}/users/me?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const messages: Message[] = [
      ...response.data.sent.map((msg: Message) => ({
        id: msg.id,
        text: msg.text,
        sender: userId,
        receiver: 1,
        documentId: msg.documentId,
        timestamp: new Date(msg.timestamp).getTime(),
      })),
      ...response.data.recieved.map((msg: Message) => ({
        id: msg.id,
        text: msg.text,
        sender: 1,
        receiver: userId,
        documentId: msg.documentId,
        timestamp: new Date(msg.timestamp).getTime(),
      })),
    ];

    // ✅ Use a Set to remove duplicate messages based on documentId
    const uniqueMessages: {
      id: number;
      text: string;
      sender: number;
      receiver: number;
      timestamp: number;
    }[] = [];
    const seenDocumentIds = new Set();

    messages.forEach((msg) => {
      if (!seenDocumentIds.has(msg.documentId)) {
        seenDocumentIds.add(msg.documentId);
        uniqueMessages.push(msg);
      }
    });

    // ✅ Sort messages by timestamp (oldest to newest)
    uniqueMessages.sort((a, b) => a.timestamp - b.timestamp);

    console.log(uniqueMessages)
    return uniqueMessages;
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    return [];
  }
};
