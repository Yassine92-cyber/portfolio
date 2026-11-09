"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown, Star, Award, Briefcase, GraduationCap, BookOpen, Users,
    Lightbulb, Globe, MessageCircle, MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { ButtonLink } from "@/components/ui/button-link";
import { orinavis } from "@/lib/portfolio-data";
