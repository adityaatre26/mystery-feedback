import { Message } from "@/models/User";

// ApiResponse interface
// Will send success and message compusorily along with the optional stuff
export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptingMessages?: boolean;
  messages?: Array<Message>;
}
