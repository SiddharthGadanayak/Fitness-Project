import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

type LoginFormValues = {
  email: string;
  password: string;
};

type SignupFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTab?: "login" | "signup";
}

const AuthDialog = ({ open, onOpenChange, defaultTab = "login" }: AuthDialogProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const { toast } = useToast();

  const loginForm = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signupForm = useForm<SignupFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onLogin = (data: LoginFormValues) => {
    toast({
      title: "Login Successful",
      description: `Welcome back, ${data.email}!`,
    });
    console.log("Login:", data);
    loginForm.reset(); // Clear fields
    onOpenChange(false);
  };

  const onSignup = (data: SignupFormValues) => {
    if (data.password !== data.confirmPassword) {
      signupForm.setError("confirmPassword", { type: "manual", message: "Passwords don't match" });
      return;
    }
    toast({
      title: "Account Created",
      description: `Welcome, ${data.name}! Your account has been created.`,
    });
    console.log("Signup:", data);
    signupForm.reset(); // Clear fields
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden">
        <div className="gradient-primary p-2">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">
              {activeTab === "login" ? "Welcome Back" : "Join FitLife"}
            </DialogTitle>
          </DialogHeader>
        </div>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "login" | "signup")} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mt-1">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="px-6 pb-2 pt-1">
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-2">
                <FormField
                  control={loginForm.control}
                  name="email"
                  rules={{ required: "Email is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={loginForm.control}
                  name="password"
                  rules={{ required: "Password is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="••••••••" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Login
                </Button>

                <p className="text-sm text-center text-muted-foreground">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("signup")}
                    className="text-primary hover:underline font-medium"
                  >
                    Sign up
                  </button>
                </p>
              </form>
            </Form>
          </TabsContent>

          <TabsContent value="signup" className="px-6 pb-2 pt-1">
            <Form {...signupForm}>
              <form onSubmit={signupForm.handleSubmit(onSignup)} className="space-y-1">
                <FormField
                  control={signupForm.control}
                  name="name"
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={signupForm.control}
                  name="email"
                  rules={{ required: "Email is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={signupForm.control}
                  name="password"
                  rules={{ required: "Password is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="••••••••" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={signupForm.control}
                  name="confirmPassword"
                  rules={{ required: "Please confirm your password" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input placeholder="••••••••" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Create Account
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;