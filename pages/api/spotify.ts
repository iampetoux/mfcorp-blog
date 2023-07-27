import type { NextApiRequest, NextApiResponse } from 'next'
import { getNowPlaying } from '../../libs/spotify'
import type { SpotifyNowPlayingData } from '../../types/spotify'

export default async function fetchNowPlaying(_: NextApiRequest, res: NextApiResponse) {
  const response = await getNowPlaying()
  if (response.status === 204 || response.status > 400) {
    return res.status(response.status).json({ isPlaying: false })
  }

  const data = await response.json()
  if (data?.currently_playing_type === 'episode') {
    return res
      .status(200)
      .json({ isPlaying: true, title: data.item.name, songUrl: data.item.external_urls.spotify })
  }
  const songData: SpotifyNowPlayingData = {
    isPlaying: data.is_playing,
    title: data.item.name,
    artist: data.item.artists.map((art: { name: string }) => art.name).join(', '),
    album: data.item.album.name,
    albumImageUrl: data.item.album.images[0]?.url,
    songUrl: data.item.external_urls.spotify,
  }

  return res.status(200).json(songData)
}
