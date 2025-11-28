export interface TaskItem {
  id: number;
  reward: string;
  title: string;
  condition: string;
  type: 'recharge' | 'invitation';
  progress?: {
    current: number;
    required: number;
  };
  completionStatus?: string;
}

export const taskData: TaskItem[] = [
  {
    id: 1,
    reward: '+3.00 USD',
    title: 'Participation rewards',
    condition: 'Wallet balance ≥100USDT',
    type: 'recharge',
  },
  {
    id: 2,
    reward: '+1.80 USD',
    title: 'Invitation Rewards',
    condition: 'Invited users with withdrawal amount ≥3USDT',
    type: 'invitation',
    progress: {
      current: 0,
      required: 1,
    },
    completionStatus: '0/0',
  },
  {
    id: 3,
    reward: '+3.80 USD',
    title: 'Invitation Rewards',
    condition: 'Invited users with withdrawal amount ≥3USDT',
    type: 'invitation',
    progress: {
      current: 0,
      required: 3,
    },
    completionStatus: '0/0',
  },
  {
    id: 4,
    reward: '+88.00 USD',
    title: 'Invitation Rewards',
    condition: 'Invited users with withdrawal amount ≥30USDT',
    type: 'invitation',
    progress: {
      current: 0,
      required: 0,
    },
    completionStatus: '0/0',
  },
];

