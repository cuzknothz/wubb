'use client'

import { chain } from 'lodash'
import { useEffect } from 'react'

export default function LodashPage() {
  useEffect(() => {
    const a = chain([1, 2, 3])
      .map((i) => i * 5)
      .value()

    console.log('A', a)
  }, [])

  return <div>LODASH IS GOD</div>
}
