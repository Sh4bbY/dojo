Rover Mission - 01 - Move Around
================================

`Protocol01.ts` is should be used to control the deployed rover and fulfill the mission.
To improve the robot control and make things easier, you should add new functionalities to Rover in `Rover01.ts`.

Default Rover Controls:
```typescript
moveForward(): Promise<void>
moveBackward(): Promise<void>
turnLeft(): Promise<void>
turnRight(): Promise<void>
grab(): SurfaceItem
drop(item: SurfaceItem): void
```

The Goal of this Mission:
- Move to every corner, pick up the flags and add them into the rovers bag.
- End the Mission on the same coordinates where you have started.
