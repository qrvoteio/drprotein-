import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChatButton() {
  console.log("ChatButton rendered");

  const handleClick = () => {
    console.log("ChatButton clicked");
    window.open("https://chat.arvoteai.ru?company=7b61fef8-a54e-4834-9a56-96bf7d14ccbb", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      style={{ position: 'fixed', bottom: '16px', right: '16px', zIndex: 9999 }}
      className="h-14 w-14 rounded-full bg-yellow-500 text-white shadow-lg hover:scale-110 hover:bg-yellow-600 transition-all duration-300 flex flex-col items-center justify-center"
      data-testid="button-chat"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="text-xs font-bold">AI</span>
    </Button>
  );
}