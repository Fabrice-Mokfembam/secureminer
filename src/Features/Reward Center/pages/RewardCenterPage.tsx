import { CalendarCheck } from 'lucide-react';
import { taskData } from '../Utils/taskData';

function RewardCenterPage() {
  return (
    <div className="pb-4">
      {/* Lucky Draw and Check-in Cards Section */}
      <div className="px-4 mb-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Lucky Draw Card */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative p-4 h-full">
              <div className="bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl p-4 border border-[var(--color-bg-border)] flex flex-col items-center text-center h-full justify-between">
                {/* Spinning Wheel Icon */}
                <div className="w-16 h-16 rounded-full border-2 border-purple-400 flex items-center justify-center mb-3 relative overflow-hidden">
                  <div className="absolute inset-0 rounded-full" style={{
                    background: `conic-gradient(
                      #a855f7 0deg 45deg,
                      white 45deg 90deg,
                      #a855f7 90deg 135deg,
                      white 135deg 180deg,
                      #a855f7 180deg 225deg,
                      white 225deg 270deg,
                      #a855f7 270deg 315deg,
                      white 315deg 360deg
                    )`
                  }}></div>
                  <div className="w-10 h-10 rounded-full bg-[var(--color-bg-main)] z-10 border border-purple-400"></div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2">
                    Lucky Draw
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-xs">
                    Win prizes through lottery
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Check in to receive rewards Card */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative p-4 h-full">
              <div className="bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl p-4 border border-[var(--color-bg-border)] flex flex-col items-center text-center h-full justify-between">
                {/* Calendar with Checkmark Icon */}
                <div className="w-16 h-16 rounded-lg border-2 border-[var(--color-accent-orange)] flex items-center justify-center mb-3 relative bg-[var(--color-bg-main)]">
                  <CalendarCheck className="w-8 h-8 text-[var(--color-accent-orange)]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2">
                    Check in to receive<br />rewards
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-xs">
                    The more you check in,<br />the more rewards you get
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Center Section */}
      <div className="px-4 mb-4">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative p-4">
            <div className="bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-xl p-4 border border-[var(--color-bg-border)]">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] inline-block border-b-2 border-[var(--color-accent-orange)] pb-2">
                  Task Center
                </h2>
              </div>

              <div className="space-y-3">
                {taskData.map((task) => (
                  <div
                    key={task.id}
                    className="bg-[var(--color-bg-main)] rounded-lg p-4 border border-[var(--color-bg-border)]"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="text-[var(--color-accent-orange)] text-sm font-semibold mb-1">
                          {task.reward}
                        </p>
                        <h3 className="text-[var(--color-text-primary)] text-sm font-semibold mb-1">
                          {task.title}
                        </h3>
                        <p className="text-[var(--color-text-muted)] text-xs">
                          {task.condition}
                        </p>
                      </div>
                      {task.type === 'recharge' ? (
                        <button className="px-4 py-2 bg-[var(--color-accent-orange)] text-black rounded-lg text-xs font-semibold hover:bg-[var(--color-accent-orange-hover)] transition-colors flex-shrink-0">
                          Recharge
                        </button>
                      ) : (
                        <div className="px-3 py-1 bg-[var(--color-accent-orange)] text-black rounded-lg text-xs font-semibold flex-shrink-0">
                          {task.completionStatus}
                        </div>
                      )}
                    </div>

                    {task.type === 'invitation' && task.progress && (
                      <div className="mt-3 pt-3 border-t border-[var(--color-bg-border)]">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[var(--color-text-muted)] text-xs">
                            Invited / Need Invite
                          </span>
                          <span className="text-[var(--color-text-primary)] text-xs font-semibold bg-[var(--color-bg-secondary)] px-2 py-1 rounded">
                            {task.progress.current}/{task.progress.required}
                          </span>
                        </div>
                        <div className="w-full bg-[var(--color-bg-secondary)] rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-[var(--color-accent-orange)] h-full rounded-full transition-all duration-300"
                            style={{
                              width: `${task.progress.required > 0 ? (task.progress.current / task.progress.required) * 100 : 0}%`,
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RewardCenterPage;

