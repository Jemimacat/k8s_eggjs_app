'use strict';

const Controller = require('egg').Controller;

// 所有历史任务列表
var adminTaskHistoryList = [];

class PageController extends Controller {

  async adminTaskList() {
    const {ctx,app} = this;
    const adminTaskList = await app.mysql.select('adminTaskList');
    const staffList = await app.mysql.select('staffList');

    await ctx.render('adminTaskList.njk',{
      adminTaskList:adminTaskList,
      staffList: staffList
    });
  }

  async adminHistoryTaskList() {
    const {ctx,app} = this;
    const adminHistoryTaskList = await app.mysql.select('adminHistoryTaskList');
    const staffList = await app.mysql.select('staffList');

    await ctx.render('adminHistoryTaskList.njk',{
      adminHistoryTaskList:adminHistoryTaskList,
      staffList: staffList
    });
  }

  async taskDetail() {
    const {ctx,app} = this;
    var taskId = ctx.request.query;
    
    const adminTaskItem = await app.mysql.get('adminTaskList',{id: taskId.id});
    const usageType = await app.mysql.select('usageType');
    const staffList = await app.mysql.select('staffList');
    const organizationList = await app.mysql.select('organizationList');
    const frequencyList = await app.mysql.select('frequencyList');
    await ctx.render('taskDetail.njk',{
      adminTaskItem:adminTaskItem,
      adminTaskId:taskId.id,
      usageType:usageType,
      staffList:staffList,
      organizationList:organizationList,
      frequencyList:frequencyList
    });
  }

  async newTask() {
    const {ctx,app} = this;
    const usageType = await app.mysql.select('usageType');
    const staffList = await app.mysql.select('staffList');
    const organizationList = await app.mysql.select('organizationList');
    const frequencyList = await app.mysql.select('frequencyList');

    await ctx.render('newTask.njk',{
      usageType:usageType,
      staffList:staffList,
      organizationList:organizationList,
      frequencyList:frequencyList
    });  
  }

  async validateTask() {
    const {ctx,app} = this;
    var taskId = ctx.request.query;
    
    const adminTaskItem = await app.mysql.get('adminTaskList',{id: taskId.id});
    await ctx.render('validateHistoryTask.njk',{
      adminTaskItem:adminTaskItem,
      adminTaskId:taskId.id
    });
  }
 
}

module.exports = PageController;
