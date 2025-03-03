import React from 'react';
import { Button } from "/components/ui/button";
import { Card, CardContent } from "/components/ui/card";
import { Input } from "/components/ui/input";
import { Label } from "/components/ui/label";
import { Heart, Shield, Clock, Users, Play, Home, Search, Menu, User, Settings, Mail, Bell, Calendar, Star, Upload, Download, Trash, Edit, Plus, Minus, Check, X, ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo />
      <Tagline />
      <MainMessage />
      <Subtitle />
      <SearchBar />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <div className="text-2xl font-bold text-blue-600">LlamaCoder</div>
      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded-full" />
      </div>
    </div>
  );
}

function Tagline() {
  return (
    <div className="text-sm text-black mb-8">together.ai</div>
  );
}

function MainMessage() {
  return (
    <div className="text-4xl font-bold mb-4">
      Turn your idea into an <span className="text-blue-600">app</span>
    </div>
  );
}

function Subtitle() {
  return (
    <div className="text-lg text-gray-600 mb-8">
      Powered by Together AI. Used by 600k+ users.
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex items-center space-x-2 mb-8">
      <Input placeholder="Build me a budgeting app..." className="w-full max-w-md" />
      <DropdownMenu />
    </div>
  );
}

function DropdownMenu() {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-2">
      <div className="text-sm text-gray-600 py-2 px-4 hover:bg-gray-100">Qwen 2.5 Coder 32B</div>
      <div className="text-sm text-gray-600 py-2 px-4 hover:bg-gray-100">High quality [slower]</div>
      <div className="text-sm text-blue-600 py-2 px-4 hover:bg-gray-100">Attach</div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 border-t border-gray-200">
      <IconRow />
      <FooterBranding />
    </div>
  );
}

function IconRow() {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <Clock className="w-6 h-6 text-gray-600" />
      <Users className="w-6 h-6 text-gray-600" />
      <Play className="w-6 h-6 text-gray-600" />
      <Home className="w-6 h-6 text-gray-600" />
      <Search className="w-6 h-6 text-gray-600" />
      <Menu className="w-6 h-6 text-gray-600" />
    </div>
  );
}

function FooterBranding() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-blue-600 rounded-full" />
      </div>
      <div className="text-sm text-gray-600">built with Llama 3.1 and Together AI</div>
      <ArrowRight className="w-6 h-6 text-gray-600" />
    </div>
  );
}

export default App;