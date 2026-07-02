# Adding Images Permanently

The Upload File buttons in the browser are only previews for the current device. To make images appear on the live website for everyone, add the image files to this project and reference them from the data file.

## Project screenshots

1. Put project screenshots in `public/images/projects/`.
2. Open `src/data.ts`.
3. Add an `imageUrl` field to the matching project.

Example:

```ts
{
  id: 'proj1',
  title: 'Atlas — AI Voice Receptionist',
  platform: 'n8n',
  imageUrl: '/images/projects/atlas-ai-voice-receptionist.jpg',
  // keep the rest of the existing fields
}
```

## Certificate images

1. Put certificate images in `public/images/certificates/`.
2. Open `src/data.ts`.
3. Add an `imageUrl` field to the matching certificate.

Example:

```ts
{
  id: 'cert1',
  title: 'n8n Advanced Workflow Automation',
  imageUrl: '/images/certificates/n8n-advanced-workflow-automation.jpg',
  // keep the rest of the existing fields
}
```

## Profile image

1. Put your photo in `public/images/profile/`.
2. Open `src/data.ts`.
3. Set `profileImage` in `PERSONAL_INFO`.

Example:

```ts
profileImage: '/images/profile/john-daniel-nate.jpg'
```

Use exact file names, including capitalization. For example, `Certificate.JPG` and `certificate.jpg` are different file names online.
