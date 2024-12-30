import { test, expect } from '@playwright/test';

test("Traffic Light - green color", async () => {
  expect(trafficLightAction(TrafficLights.GREEN.color)).toBe(TrafficLights.GREEN.description);
});

test("Traffic Light - yellow color", async () => {
  expect(trafficLightAction(TrafficLights.YELLOW.color)).toBe(TrafficLights.YELLOW.description);
});

test("Traffic Light - red color", async () => {
  expect(trafficLightAction(TrafficLights.RED.color)).toBe(TrafficLights.RED.description);
});

test("Traffic Light negative - incorrect pink color", async () => {
  expect(trafficLightAction('рожевий')).toBe('Невідомий колір! Будьте уважні та обережні!');
});


function trafficLightAction(color) {
  switch (color.toLowerCase()) {
      case 'зелений':
          return 'Зелений — переходьте';
      case 'жовтий':
          return 'Жовтий — підготуйтеся';
      case 'червоний':
          return 'Червоний — зачекайте';
      default:
          return 'Невідомий колір! Будьте уважні та обережні!';
  }
}

const TrafficLights = {
  GREEN: { color: 'зелений', description: 'Зелений — переходьте' },
  YELLOW: { color: 'жовтий', description: 'Жовтий — підготуйтеся' },
  RED: { color: 'червоний', description: 'Червоний — зачекайте' }
};
