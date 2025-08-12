import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export default function AuthPage() {
  const { toast } = useToast();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = mode === "login" ? "Login | Admin" : "Sign Up | Admin";
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.setAttribute("content", "Admin authentication for gallery and blog management.");
  }, [mode]);

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast({ title: "Login failed", description: error.message });
    } else {
      toast({ title: "Logged in", description: "You are now logged in." });
      window.location.assign("/");
    }
    setLoading(false);
  };

  const handleSignup = async () => {
    setLoading(true);
    const redirectUrl = `${window.location.origin}/`;
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: redirectUrl },
    });
    if (error) {
      toast({ title: "Signup failed", description: error.message });
    } else {
      toast({ title: "Check your email", description: "Confirm your email to finish signup." });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-2">{mode === "login" ? "Admin Login" : "Admin Sign Up"}</h1>
            <p className="text-muted-foreground mb-6">
              {mode === "login" ? "Sign in to manage gallery uploads." : "Create an account. An admin must grant permissions."}
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="flex gap-2">
                {mode === "login" ? (
                  <Button onClick={handleLogin} disabled={loading}>{loading ? "Signing in..." : "Sign In"}</Button>
                ) : (
                  <Button onClick={handleSignup} disabled={loading}>{loading ? "Creating..." : "Create Account"}</Button>
                )}
                <Button variant="outline" onClick={() => setMode(mode === "login" ? "signup" : "login")}>
                  {mode === "login" ? "Need an account?" : "Have an account?"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">After signup, an admin must grant you admin access.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
