# 🔥 Firestore Setup Guide

## ⚠️ IMPORTANT: Set Up Firestore Security Rules

Your app won't work properly until you add these security rules!

### Step 1: Go to Firebase Console

1. Open [Firebase Console](https://console.firebase.google.com/)
2. Select your **linkease-51a7b** project
3. Click **Firestore Database** in the left menu

### Step 2: Add Security Rules

1. Click the **Rules** tab at the top
2. Replace ALL the existing rules with these:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Allow users to read and write their own links
    match /links/{linkId} {
      allow read: if request.auth != null && resource.data.userId == request.auth.uid;
      allow write: if request.auth != null && request.resource.data.userId == request.auth.uid;
      allow create: if request.auth != null;
      allow delete: if request.auth != null && resource.data.userId == request.auth.uid;
    }
    
    // Optional: Allow users to manage their own user document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. Click **Publish** button
4. Wait for "Rules published successfully" message

### Step 3: Verify Your Rules

Your rules should now show:
- ✅ Users can only read their own links
- ✅ Users can only create/update/delete their own links
- ✅ Authentication is required for all operations

### What These Rules Do:

- **`request.auth != null`** - Ensures user is logged in
- **`resource.data.userId == request.auth.uid`** - Ensures user can only access their own data
- **`allow create`** - Allows authenticated users to create new links
- **`allow read/write/delete`** - Allows users to manage only their own links

### Test Your Setup:

1. Refresh your app
2. Try adding a link
3. You should see it appear immediately
4. Check browser console for any errors

### Common Issues:

**Issue:** "Missing or insufficient permissions"
- **Fix:** Make sure you published the security rules above

**Issue:** "PERMISSION_DENIED: Missing or insufficient permissions"
- **Fix:** Make sure you're logged in and the rules are published

**Issue:** Links not showing
- **Fix:** Check browser console (F12) for errors
- **Fix:** Make sure you added the security rules and published them

### Production Rules (Optional, for later):

When you're ready to deploy, use these more strict rules:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /links/{linkId} {
      allow read: if request.auth != null && 
                     resource.data.userId == request.auth.uid;
      
      allow create: if request.auth != null && 
                       request.resource.data.userId == request.auth.uid &&
                       request.resource.data.keys().hasAll(['userId', 'url', 'title']);
      
      allow update: if request.auth != null && 
                       resource.data.userId == request.auth.uid &&
                       request.resource.data.userId == request.auth.uid;
      
      allow delete: if request.auth != null && 
                       resource.data.userId == request.auth.uid;
    }
  }
}
```

---

## ✅ After Setup:

Your app should now:
- ✅ Load links successfully
- ✅ Allow adding new links
- ✅ Allow editing links
- ✅ Allow deleting links
- ✅ Keep your data secure

**Reload your app after publishing the rules!** 🚀
