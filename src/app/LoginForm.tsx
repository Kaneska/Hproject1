
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const LoginForm = () => {
  return (
    <form className="space-y-6">
      <div>
        <Label className="text-white/80">Email</Label>
        <Input
          type="email"
          placeholder="Enter your email"
          className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
        />
      </div>
      <div>
        <Label className="text-white/80">Password</Label>
        <Input
          type="password"
          placeholder="Enter your password"
          className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" className="bg-white/5 border-white/10" />
          <Label htmlFor="remember" className="text-sm text-white/60">Remember me</Label>
        </div>
        <button type="button" className="text-sm text-purple-400 hover:text-purple-300">
          Forgot password?
        </button>
      </div>
      <Button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
