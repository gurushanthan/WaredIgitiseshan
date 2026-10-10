import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/index.js'

export default defineConfig({
  name: 'waredigitise-news',
  title: 'WareDigitise News',
  projectId: 'oc86z5oj',
  dataset: 'production',
  plugins: [visionTool()],
  schema: {types: schemaTypes},
})
