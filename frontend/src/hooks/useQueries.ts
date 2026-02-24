import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Dealer, Inquiry } from '../backend';

export function useGetAllDealers() {
  const { actor, isFetching } = useActor();

  return useQuery<Dealer[]>({
    queryKey: ['dealers'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllDealers();
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function useGetDealersByCity(city: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Dealer[]>({
    queryKey: ['dealers', 'city', city],
    queryFn: async () => {
      if (!actor || !city.trim()) return [];
      return actor.getDealersByCity(city.trim());
    },
    enabled: !!actor && !isFetching && city.trim().length > 0,
  });
}

export function useGetDealersByState(state: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Dealer[]>({
    queryKey: ['dealers', 'state', state],
    queryFn: async () => {
      if (!actor || !state.trim()) return [];
      return actor.getDealersByState(state.trim());
    },
    enabled: !!actor && !isFetching && state.trim().length > 0,
  });
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (inquiry: Inquiry) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitInquiry(inquiry);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}
