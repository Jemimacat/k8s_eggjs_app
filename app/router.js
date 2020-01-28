'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.page.adminTaskList);
  router.get('/page/adminTaskList', controller.page.adminTaskList);
  router.get('/page/adminHistoryTaskList', controller.page.adminHistoryTaskList);
  router.get('/page/newTask',controller.page.newTask);
  router.get('/page/validHistoryTask',controller.page.validateTask);
  router.get('/page/taskDetail',controller.page.taskDetail);
  router.post('/task/addNewTask',controller.task.addNewTask);
  router.post('/task/addHistoryTask',controller.task.addHistoryTask);
  router.post('/task/updateTask',controller.task.updateTask);


};
