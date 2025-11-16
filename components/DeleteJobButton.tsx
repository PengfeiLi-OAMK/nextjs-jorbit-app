import { Button } from './ui/button';
import { Badge } from './ui/badge';
import JobInfo from './JobInfo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteJobAction } from '@/utils/actions';
import { useToast } from '@/components/ui/use-toast';

function DeleteJobButton({id}: {id:string}) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const{mutate, isPending}=useMutation({
	mutationFn:(id:string)=>deleteJobAction(id),
	onSuccess: (data) => {
		if(!data){
			toast({description:'Failed to delete job. Please try again.'});
			return;
		}
		toast({description:'Job deleted successfully!'});
		queryClient.invalidateQueries({queryKey:['jobs']});
		queryClient.invalidateQueries({ queryKey: ['stats'] });
		queryClient.invalidateQueries({ queryKey: ['charts'] });
	}
  });
  return (
	<Button
	size="sm"
	disabled={isPending}
	onClick={()=>mutate(id)}
	>
   {isPending ? 'Deleting...' : 'Delete'}
	</Button>
  );
}

export default DeleteJobButton;
