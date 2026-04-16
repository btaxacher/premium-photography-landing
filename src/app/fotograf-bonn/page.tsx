import { CityPage, cityPageMetadata } from '@/components/pages/city-template'

export const generateMetadata = () => cityPageMetadata('fotograf-bonn')
export default function Page() { return <CityPage slug="fotograf-bonn" /> }
