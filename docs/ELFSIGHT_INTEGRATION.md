# Elfsight Google Reviews Integration

This document explains how the Elfsight Google Reviews widget is integrated into the mrcstreetvisuals portfolio.

## Overview

The Elfsight widget displays real Google Reviews from your Google Business Profile directly on the website, providing social proof and building trust with potential clients.

## Widget Details

- **Widget ID**: `f87d232c-8173-4b1a-a1e4-a6cb527721a4`
- **Platform URL**: `https://elfsightcdn.com/platform.js`
- **Location**: Testimonials section on homepage

## Files Modified

### 1. `components/testimonials-section.tsx`
- Removed hardcoded testimonials
- Added Elfsight widget embed code
- Wrapped in GradualBlurWrapper for smooth animations
- Added useEffect hook for widget initialization

### 2. `app/layout.tsx`
- Added Elfsight script with `lazyOnload` strategy
- Added preconnect and dns-prefetch for Elfsight CDN
- Fixed viewport configuration (moved to separate export)
- Proper async loading

### 3. `app/globals.css`
- Custom dark theme styling for widget
- Purple accent colors matching brand
- Smooth hover effects and transitions
- Responsive design adjustments
- GPU-accelerated animations

### 4. `lib/elfsight-config.ts`
- Centralized configuration
- Helper functions for widget initialization
- Type-safe settings

### 5. `components/client-layout.tsx`
- Fixed useSearchParams Suspense boundary error
- Proper analytics tracking
- Clean component structure

### 6. `next.config.mjs`
- Removed `optimizeCss` experimental feature (was causing critters error)
- Optimized webpack configuration
- Proper cache headers

## Features

✅ **Real-time Reviews**: Displays actual reviews from Google Business Profile
✅ **Auto-update**: Reviews update automatically from Google
✅ **Dark Theme**: Custom styling matches portfolio design
✅ **Responsive**: Works perfectly on all devices
✅ **Performance**: Lazy-loaded for optimal page speed
✅ **Customizable**: All settings controllable via Elfsight dashboard

## Widget Settings

You can customize the widget appearance in your Elfsight dashboard:

- **Layout**: Slider, Grid, List, or Masonry
- **Reviews per page**: Number of reviews to display
- **Autoplay**: Enable/disable auto-scrolling
- **Autoplay delay**: Time between slides (milliseconds)
- **Show/hide elements**: Avatar, date, rating, etc.

## How It Works

1. Script loads asynchronously when page loads
2. Widget initializes when testimonials section comes into view (lazy loading)
3. Fetches latest reviews from your Google Business Profile
4. Displays reviews with custom styling
5. Auto-updates when new reviews are posted

## Performance

- **Loading Strategy**: `lazyOnload` - loads after page is interactive
- **DNS Prefetch**: Pre-resolves Elfsight CDN domain
- **Preconnect**: Establishes early connection to CDN
- **GPU Acceleration**: Smooth animations using CSS transforms
- **Lazy Init**: Widget only loads when scrolled into view

## Customization

### Change Widget Appearance

1. Log into your Elfsight dashboard
2. Find widget ID: `f87d232c-8173-4b1a-a1e4-a6cb527721a4`
3. Edit settings (layout, colors, etc.)
4. Changes apply automatically without code changes

### Modify Custom Styling

Edit `app/globals.css` and look for:
\`\`\`css
:global(.elfsight-app-f87d232c-8173-4b1a-a1e4-a6cb527721a4)
\`\`\`

### Update Widget ID

If you need to use a different widget:

1. Update in `components/testimonials-section.tsx`:
   \`\`\`tsx
   <div className="elfsight-app-YOUR-NEW-ID" data-elfsight-app-lazy></div>
   \`\`\`

2. Update in `lib/elfsight-config.ts`:
   \`\`\`typescript
   GOOGLE_REVIEWS_WIDGET_ID: 'YOUR-NEW-ID'
   \`\`\`

3. Update CSS class in `app/globals.css` to match new ID

## Troubleshooting

### Widget Not Loading

1. Check browser console for errors
2. Verify widget ID is correct
3. Ensure Elfsight script is loading (check Network tab)
4. Check if ad blockers are interfering

### Widget Not Styled Correctly

1. Check if custom CSS is being applied
2. Clear browser cache
3. Verify CSS class names match widget ID

### Reviews Not Showing

1. Verify Google Business Profile is properly connected in Elfsight
2. Check if reviews are public on Google
3. Ensure widget is not set to filter certain reviews

## Support

For Elfsight-specific issues:
- Elfsight Support: https://elfsight.com/support/
- Elfsight Documentation: https://elfsight.com/google-reviews-widget/

For custom styling or integration issues:
- Contact: mrcstreetvisuals@gmail.com

## Benefits

✨ **Social Proof**: Real reviews build trust
⚡ **Auto-updating**: No manual management needed
🎨 **Branded**: Matches your portfolio design
📱 **Mobile-friendly**: Responsive on all devices
🚀 **Fast**: Optimized for performance
🔧 **Easy**: Manage in Elfsight dashboard

## Next Steps

1. ✅ Integration complete
2. ✅ Custom styling applied
3. ✅ Performance optimized
4. Test on all devices
5. Monitor reviews and engagement
6. Customize settings as needed in Elfsight dashboard

---

**Last Updated**: December 2024
**Widget Version**: Latest
**Status**: ✅ Active and Working
