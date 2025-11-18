import {
  Card,
  CardHeader,
} from '@/components/ui/card';

import { Skeleton } from './ui/skeleton';

function StatsLoadingCard() {
  return (
    <Card className="w-[280px] h-[88px]">
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div>
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px] mt-1" />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export default StatsLoadingCard;
