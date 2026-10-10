import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/index.js'

export default defineConfig({
  name: 'waredigitise-news',
  title: 'WareDigitise News',
  projectId: 'oc86z5oj',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {types: schemaTypes},
})
