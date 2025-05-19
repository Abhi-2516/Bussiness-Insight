
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendIcon, BrainCircuit, MessageSquare } from "lucide-react";
import { aiAssistantResponses, suggestedQuestions } from "@/utils/mockData";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export function AIAssistant() {
  const [query, setQuery] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [conversation, setConversation] = useState<Array<{type: "user" | "ai", text: string}>>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [helpOpen, setHelpOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const processQuery = (userQuery: string) => {
    if (!userQuery.trim()) return;
    
    const processedQuery = userQuery.trim().toLowerCase();
    setConversation([...conversation, { type: "user", text: userQuery }]);
    setQuery("");
    setIsThinking(true);
    setShowSuggestions(false);
    
    // Simulate AI thinking and response
    setTimeout(() => {
      let response = "I don't have enough information to answer that question. Try asking about revenue drops, product promotions, or improving conversion rates.";
      
      // Check for matching responses in our mock data
      Object.entries(aiAssistantResponses).forEach(([key, value]) => {
        if (processedQuery.includes(key)) {
          response = value;
        }
      });
      
      setConversation(prev => [...prev, { type: "ai", text: response }]);
      setIsThinking(false);
      
      // Show toast for AI response
      toast({
        title: "AI Assistant",
        description: "New insights available",
      });
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processQuery(query);
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    processQuery(suggestion);
  };
  
  const handleClearChat = () => {
    setConversation([]);
    setShowSuggestions(true);
  };

  return (
    <Card className="col-span-12">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center">
          <BrainCircuit className="mr-2 h-5 w-5 text-insight-accent" />
          <CardTitle>AI Business Assistant</CardTitle>
        </div>
        <div className="flex gap-2">
          {conversation.length > 0 && (
            <Button variant="ghost" size="sm" onClick={handleClearChat}>
              Clear Chat
            </Button>
          )}
          <Button 
            variant="outline" 
            size="sm" 
            className="text-muted-foreground"
            onClick={() => setHelpOpen(true)}
          >
            <MessageSquare className="h-4 w-4 mr-1" /> Help
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-[350px] overflow-y-auto border rounded-md p-4 bg-muted/30">
          {conversation.length === 0 && showSuggestions ? (
            <div className="flex flex-col h-full space-y-4">
              <div className="text-center text-muted-foreground mb-2">
                <p className="font-medium">Ask business questions about your data</p>
                <p className="text-xs mt-1">Select a suggestion or type your own question</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {suggestedQuestions.map((question, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    className="justify-start h-auto py-3 text-left"
                    onClick={() => handleSuggestionClick(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {conversation.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-3 ${
                    msg.type === "user"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-4 py-2 ${
                      msg.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                    {msg.type === "ai" && (
                      <div className="mt-1 text-xs text-muted-foreground flex justify-end">
                        <Badge variant="outline" className="text-[10px]">AI Assistant</Badge>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isThinking && (
                <div className="flex justify-start mb-3">
                  <div className="bg-muted max-w-[75%] rounded-lg px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse"></div>
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-150"></div>
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="text"
            placeholder="Ask about your business data..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1"
          />
          <Button 
            type="submit" 
            disabled={!query.trim() || isThinking}
            loading={isThinking}
          >
            <SendIcon className="h-4 w-4" />
            <span className="ml-2 hidden md:inline">Ask</span>
          </Button>
        </form>
      </CardContent>

      {/* Help Dialog */}
      <Dialog open={helpOpen} onOpenChange={setHelpOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>AI Business Assistant Help</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The AI Business Assistant analyzes your business data to provide insights and recommendations. 
              Here are some questions you can ask:
            </p>
            <div className="grid grid-cols-1 gap-2">
              {suggestedQuestions.map((question, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  className="justify-start h-auto text-left"
                  onClick={() => {
                    setHelpOpen(false);
                    setTimeout(() => handleSuggestionClick(question), 300);
                  }}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
