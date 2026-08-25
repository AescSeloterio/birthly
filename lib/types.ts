export type SelectedItem = {
  id: string
  title: string
  subtitle?: string
  image: string
  text: string
  meta?: string
  video?: string
  kind: "photo" | "album" | "video" | "track" | "letter"
}
