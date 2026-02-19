# Tawk.to Live Chat Integration Guide

## Setup Instructions

### 1. Create a Tawk.to Account

1. Go to [https://www.tawk.to/](https://www.tawk.to/)
2. Click "Sign up for free"
3. Complete the registration

### 2. Get Your Tawk.to Credentials

1. Log in to your Tawk.to dashboard
2. Go to **Administration** → **Property Settings**
3. Find your **Property ID** and **Widget ID** in the embed code
   - The embed code looks like: `https://embed.tawk.to/{PROPERTY_ID}/{WIDGET_ID}`
   - Example: `https://embed.tawk.to/5f8a1234567890abcd/1efgh23456`
     - Property ID: `5f8a1234567890abcd`
     - Widget ID: `1efgh23456`

### 3. Configure Your Environment Variables

Open your `.env` file and replace the placeholder values:

```env
VITE_TAWK_PROPERTY_ID = your_actual_property_id
VITE_TAWK_WIDGET_ID = your_actual_widget_id
```

### 4. Restart Your Development Server

After updating the `.env` file, restart your dev server:

```bash
npm run dev
```

## Features

The integration includes:

- ✅ Automatic widget loading on all pages
- ✅ TypeScript support with type definitions
- ✅ Proper cleanup on component unmount
- ✅ Conditional rendering (only loads if credentials are set)
- ✅ No duplicate widget instances

## Customization Options

You can use the Tawk API to customize the widget behavior. Add this code anywhere in your app:

```typescript
// Hide the widget
window.Tawk_API?.hideWidget();

// Show the widget
window.Tawk_API?.showWidget();

// Set visitor information
window.Tawk_API?.setAttributes(
  {
    name: "John Doe",
    email: "john@example.com",
  },
  (error) => {
    if (error) console.error(error);
  }
);

// Maximize the chat window
window.Tawk_API?.maximize();
```

## Tawk.to Dashboard Features (Free)

- 📱 Mobile apps for iOS and Android
- 💬 Unlimited conversations
- 👥 Unlimited agents
- 📊 Visitor monitoring
- 🤖 Triggers and shortcuts
- 📁 File sharing
- 🎨 Widget customization
- 📧 Email notifications

## Support

For Tawk.to specific issues, visit: [https://help.tawk.to](https://help.tawk.to)
