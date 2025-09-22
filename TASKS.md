# CampusLink – UI + Features Backlog

This document tracks planned tasks and progress. We'll iterate on it as we build.

## Color & Styling (Tailwind)

- [x] Remove global CSS and switch to Tailwind utilities
- [x] Apply color scheme (#192F59 primary, #3F4F6F accent, #F8F9FA bg, white surfaces)
- [x] Full-width, full-height layout
- [x] Sidebar/header polish to match scheme
- [ ] Consistent scrollbar utilities usage across scrollable panes
- [ ] Audit components for any remaining non-scheme blues/greys and fix

## Core Chat UI

- [x] Telegram-style layout (sidebar + conversation)
- [x] Message bubbles (own vs others)
- [x] Header with avatar/name/status
- [x] Message input with send action
- [x] Empty state for conversation
- [ ] Typing indicator placement inside ChatWindow
- [ ] Message read receipts (tick marks or time layout)
- [ ] Message grouping by day with sticky date separators
- [ ] Responsive tweaks (smaller breakpoints: hide sidebar, toggle)

## Contacts & Groups

- [x] Search input in sidebar
- [x] Sectioned list: Groups + Direct Messages
- [x] New Group modal: name + member selection
- [ ] Group avatars (stacked initials)
- [ ] Member count chip for groups
- [ ] Context menu per chat (mute, pin, delete)
- [ ] Sort by latest activity / unread first
- [ ] Badges for mentions @you in groups

## State & Data

- [x] In-memory groups and messages for demo
- [ ] Persist to localStorage (contacts, groups, messages, last active)
- [ ] Seed demo data if none found on first run
- [ ] Typing state per chat (simulate)
- [ ] Unread counts update when opening chats

## UX & Accessibility

- [ ] Keyboard send (Enter) and newline (Shift+Enter)
- [ ] Focus ring consistency on buttons/inputs
- [ ] ARIA labels for interactive icons
- [ ] Reduced-motion support for animations

## Server/API (future)

- [ ] Define API routes (auth, users, chats, messages, groups)
- [ ] Socket real-time events (message, typing, read receipts)
- [ ] Mongo schemas (User, Message, Conversation/Group)
- [ ] Env & health checks, production config

## QA & Tooling

- [ ] Minimal unit tests for reducers/helpers (if added)
- [ ] E2E happy path (Cypress/Playwright) later
- [ ] Lint task integrated into CI (later)

## Known Issues / Observations

- SearchBar header is dark; ensure text contrast for icons
- Some icons still use default grays; align with palette
- App currently doesn’t persist or fetch from API; demo-only

---

We’ll keep this file updated as we implement and validate features.
