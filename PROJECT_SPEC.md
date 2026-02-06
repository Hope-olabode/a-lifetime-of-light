# Project Specification: Tribute Website for a Retired Public School Worker

## Overview
A dignified, warm, and respectful tribute website honoring a retired public school worker's career and legacy.

## Pages & Structure

### 1. Homepage (Hero)
- Large hero section with an elegant placeholder image
- Name prominently displayed with a heartfelt tagline
- Brief introduction and navigation to other sections
- Classic navy & gold color scheme throughout

### 2. Biography Page (About)
- Timeline-style layout showing career journey
- Sections for:
  - Early Life
  - Teaching Career
  - Communities Served
  - Legacy & Impact
- Space for quotes and meaningful stories
- Elegant typography and warm presentation

### 3. Photo Gallery
- Grid layout with lightbox viewing
- Organized by time period or theme:
  - Early Years
  - Teaching
  - Retirement
  - etc.
- Placeholder images with captions (to be replaced)

### 4. Tributes Page
- Display wall of submitted tributes with visitor names and messages
- Submit tribute form (name, relationship, message)
- Moderation-friendly design
- Tributes saved to database
- Heartfelt presentation of each message

### 5. Contact Page
- Simple contact information
- Optional contact form for private messages

## Design System

### Color Palette
- **Primary**: Navy blue (#1e3a5f)
- **Accent**: Gold (#c5a44b)
- **Backgrounds**: Cream and warm whites

### Typography
- **Headings**: Elegant serif fonts
- **Body**: Clean sans-serif fonts

### Design Principles
- Dignified and respectful
- Warm and welcoming
- Fully responsive (desktop and mobile)
- Accessible and easy to navigate

## Backend Features

### Database Tables

#### Tributes Table
Stores visitor submissions with the following fields:
- Name (visitor's name)
- Relationship (to the honoree)
- Message (tribute text)
- Date (submission timestamp)

### Features
- Simple, secure data storage
- All tributes displayed publicly on the tributes page
- Optional moderation workflow

## Technical Stack
- Frontend: React + TypeScript + Vite
- Styling: Tailwind CSS + shadcn-ui
- Backend: To be configured (database for tributes)
